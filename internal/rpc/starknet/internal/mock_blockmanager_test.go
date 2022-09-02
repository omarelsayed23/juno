// Code generated by MockGen. DO NOT EDIT.
// Source: ./../../../db/block/manager.go

// Package internal is a generated GoMock package.
package internal

import (
	reflect "reflect"

	felt "github.com/NethermindEth/juno/pkg/felt"
	types "github.com/NethermindEth/juno/pkg/types"
	gomock "github.com/golang/mock/gomock"
)

// MockBlockManager is a mock of BlockManager interface.
type MockBlockManager struct {
	ctrl     *gomock.Controller
	recorder *MockBlockManagerMockRecorder
}

// MockBlockManagerMockRecorder is the mock recorder for MockBlockManager.
type MockBlockManagerMockRecorder struct {
	mock *MockBlockManager
}

// NewMockBlockManager creates a new mock instance.
func NewMockBlockManager(ctrl *gomock.Controller) *MockBlockManager {
	mock := &MockBlockManager{ctrl: ctrl}
	mock.recorder = &MockBlockManagerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockBlockManager) EXPECT() *MockBlockManagerMockRecorder {
	return m.recorder
}

// Close mocks base method.
func (m *MockBlockManager) Close() {
	m.ctrl.T.Helper()
	m.ctrl.Call(m, "Close")
}

// Close indicates an expected call of Close.
func (mr *MockBlockManagerMockRecorder) Close() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Close", reflect.TypeOf((*MockBlockManager)(nil).Close))
}

// GetBlockByHash mocks base method.
func (m *MockBlockManager) GetBlockByHash(blockHash *felt.Felt) (*types.Block, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetBlockByHash", blockHash)
	ret0, _ := ret[0].(*types.Block)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetBlockByHash indicates an expected call of GetBlockByHash.
func (mr *MockBlockManagerMockRecorder) GetBlockByHash(blockHash interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetBlockByHash", reflect.TypeOf((*MockBlockManager)(nil).GetBlockByHash), blockHash)
}

// GetBlockByNumber mocks base method.
func (m *MockBlockManager) GetBlockByNumber(blockNumber uint64) (*types.Block, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetBlockByNumber", blockNumber)
	ret0, _ := ret[0].(*types.Block)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetBlockByNumber indicates an expected call of GetBlockByNumber.
func (mr *MockBlockManagerMockRecorder) GetBlockByNumber(blockNumber interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetBlockByNumber", reflect.TypeOf((*MockBlockManager)(nil).GetBlockByNumber), blockNumber)
}

// PutBlock mocks base method.
func (m *MockBlockManager) PutBlock(blockHash *felt.Felt, block *types.Block) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "PutBlock", blockHash, block)
	ret0, _ := ret[0].(error)
	return ret0
}

// PutBlock indicates an expected call of PutBlock.
func (mr *MockBlockManagerMockRecorder) PutBlock(blockHash, block interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PutBlock", reflect.TypeOf((*MockBlockManager)(nil).PutBlock), blockHash, block)
}
