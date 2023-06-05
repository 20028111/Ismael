import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Panel from 'react-bootstrap/lib/Panel'
import Row from 'react-bootstrap/lib/Row'
import Table from 'react-bootstrap/lib/Table'
import {Link} from 'react-router-dom'
import {
  injectIntl,
  FormattedDate,
  FormattedMessage,
  FormattedTime,
} from 'react-intl'

import {xdr} from '../lib/stellar'
import {handleFetchDataFailure, setTitle, shortHash} from '../lib/utils'
import ClipboardCopy from './shared/ClipboardCopy'
import {withSorobanServer} from './shared/HOCs'
import {titleWithJSONButton} from './shared/TitleWithJSONButton'

const getContractWasmId = (server, contractId) => {
  const ledgerKey = xdr.LedgerKey.contractData(
    new xdr.LedgerKeyContractData({
      contractId: Buffer.from(contractId, 'hex'),
      key: xdr.ScVal.scvLedgerKeyContractExecutable(),
    })
  )
  return server.getLedgerEntry(ledgerKey).then((data) => 
    xdr.LedgerEntryData.fromXDR(data.xdr, 'base64')
      .contractData()
      .val()
      .exec()
      .wasmId()
  ).catch(handleFetchDataFailure(contractId))
}

const getContractWasmCode = (server, wasmId) => {
    const ledgerKey = xdr.LedgerKey.contractCode(
      new xdr.LedgerKeyContractCode({
        hash: wasmId,
      })
    )
    return server.getLedgerEntry(ledgerKey).then((data) => {
      return xdr.LedgerEntryData.fromXDR(data.xdr, 'base64')
        .contractCode()
        .code()
    })
  }

const DetailRow = ({label, children}) => (
  <tr>
    <td>
      <FormattedMessage id={label} />
    </td>
    <td>{children}</td>
  </tr>
)

class Contract extends React.Component {
  render() {
    const {
        id,
        wasmId,
        wasmCode,
    } = this.props

    const {formatMessage} = this.props.intl

    return (
      <Grid>
        <Row>
          <Panel
            header={titleWithJSONButton(
              <span>
                {formatMessage({id: 'contract'})}{' '}
                <span className="secondary-heading">{id}</span>
                <ClipboardCopy text={String(id)} />
              </span>
            )}
          >
            <Table>
              <tbody>
                <DetailRow label="wasmId">{wasmId}</DetailRow>
                <DetailRow label="wasmCode">{wasmCode}</DetailRow>
              </tbody>
            </Table>
          </Panel>
        </Row>
      </Grid>
    )
  }
}

class ContractContainer extends React.Component {
  state = {
    id: this.props.match.params.id,
  }

  componentDidMount() {
    this.loadContract(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    this.loadContract(nextProps.match.params.id)
  }

  async loadContract(contractId) {
    console.log('loadContract', contractId)

    const wasmId = await getContractWasmId(this.props.sorobanServer, contractId)
    if (!wasmId) {
        console.error('Failed to get wasm id')
        return
    }
    const wasmIdString = wasmId.toString('base64')
    console.log(`wasm id ${wasmIdString}`)

    const wasmCode = await getContractWasmCode(this.props.sorobanServer, wasmId)
    if (!wasmCode) {
        console.error('Failed to get wasm code')
        return
    }
    const wasmCodeString = wasmCode.toString('base64')
    console.log(`wasm code ${wasmCodeString}`)

    this.setState({wasmId: wasmIdString, wasmCode: wasmCodeString})
  }

  render() {
    return this.state.seq === 0 ? null : (
      <Contract {...this.state} {...this.props} />
    )
  }
}

export default injectIntl(withSorobanServer(ContractContainer))
